import React, { useRef, useState } from 'react';
import Drawer from "@/components/global/Drawer";
import { IconArrowLeft, IconCheck, IconCircleCheckFilled, IconCloudUpload, IconPdf } from "@tabler/icons-react";
import Dropzone from "react-dropzone";
import classNames from "classnames";
import { useToast } from "@/hooks/use-toast";
import Input from "@/components/global/Input";
import Button from "@/components/global/Button";
import { useForm } from "react-hook-form";
import { useAnalyzeStatement, useCreateStatement } from "@/api/statement";
import { GridLoader } from "react-spinners";
import { useQueryClient } from "@tanstack/react-query";
import { useGetUserBusiness } from "@/api/business";

const NewAnalysis = ({ isOpen, onClose, onView }) => {
  const toast = useToast();
  const qc = useQueryClient();
  const { data: business } = useGetUserBusiness();
  const [file, setFile] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { mutateAsync: analyze } = useAnalyzeStatement();
  const { mutateAsync: createStatement } = useCreateStatement();
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const response = useRef(null)

  const handleAnalyze = async (values) => {
    setLoading('Analyzing..')
    try {
      const payload = {
        file,
        ...values,
        start_date: '',
        end_date: '',
        type: 'business',
      };
      const fd = new FormData();
      Object.keys(payload).forEach(key => fd.append(key, payload[key]));
      const res = await analyze(fd);
      const { data: { statement } } = await createStatement({
        transactionId: res.data.transaction_id,
        name: values.full_name,
        business: business._id
      });
      response.current = statement;
      setSuccess(true);
      await qc.invalidateQueries(['statements']);
    } catch (e) {
      setError(e?.response?.data?.error ?? e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
    setLoading('');
  };

  const handleChange = () => {
    setFile(null);
    setError('');
  };

  const handleClose = () => {
    setSuccess(false);
    setFile(null);
    setLoading('');
    setError('');
    onClose();
  };

  const handleView = () => {
    onView(response.current);
    handleClose();
  };

  return (
    <Drawer isOpen={ isOpen } onClose={ handleClose }>
      {
        !file ? (
          <div className="h-full flex flex-col justify-center items-center text-center">
            <Dropzone
              onDrop={ acceptedFiles => {
                if (!acceptedFiles.length) return toast.error('Only pdf files allowed')
                setFile(acceptedFiles[0])
              } }
              accept={ { 'application/pdf': ['.pdf'] } }
            >
              { ({ getRootProps, getInputProps, isDragAccept, isDragReject }) => (
                <>
                  <div
                    { ...getRootProps() }
                    className={ classNames(
                      "w-52 h-52 border-2 border-gray-300 border-dashed rounded-full cursor-pointer hover:bg-gray-50 flex items-center justify-center relative before:absolute before:inset-0 before:border-2 before:border-slate-200 before:rounded-full before:animate-ping",
                      { 'border-red-500 text-red-500 before:border-0 before:!animate-none': isDragReject },
                      { 'border-green-500 text-green-500 before:border-0 before:!animate-none': isDragAccept },
                    ) }
                  >
                    <input { ...getInputProps() } />
                    <IconCloudUpload size="75" className="opacity-30"/>
                  </div>
                  {
                    isDragReject && (
                      <div className="flex items-center bg-red-100 text-red-600 rounded-2xl w-max mt-4 px-4 py-1">
                        Only pdf files allowed
                      </div>
                    )
                  }
                </>
              ) }
            </Dropzone>
            <p className="mt-10 max-w-[200px]">Drag and drop a pdf file or click to select</p>
          </div>
        ) : (
          <>
            {
              success ? (
                <>
                  <div className="h-full rounded-xl px-10 py-24 flex flex-col items-center justify-center text-center">
                    <IconCircleCheckFilled size="80" className="text-green-600"/>
                    <h6 className="text-xl mt-8 font-semibold max-w-xs">
                      Analysis successful
                    </h6>
                    <p className="max-w-xs mt-2">
                      Click the button below to view analysis results
                    </p>
                    <Button onClick={ handleView } variant="outlined" className="mt-8">
                      View result
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  {
                    (loading) ? (
                      <div className="h-full flex flex-col items-center justify-center">
                        <GridLoader color={ "#2563eb" }/>
                        <p className="mt-6">{ loading || 'Analyzing' }</p>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col">
                        <Button
                          onClick={ handleChange }
                          leftIcon={ <IconArrowLeft size="18"/> } variant="outlined" size="sm"
                          className="mb-10 self-start"
                        >
                          Change file
                        </Button>
                        <form className="my-auto" onSubmit={ handleSubmit(handleAnalyze) }>
                          {
                            !!error && (
                              <div className="px-4 py-2 rounded-2xl bg-red-100 text-red-600 mb-6">{ error }</div>
                            )
                          }
                          <div className="border border-gray-300 rounded-2xl flex items-center px-6 py-3">
                            <IconPdf/>
                            <div className="ml-4">
                              <p className="space-x-4">{ file.name }</p>
                              <p className="text-sm font-medium">{ (file.size / (1024 * 1024)).toFixed(2) }MB</p>
                            </div>
                            <IconCheck className="text-green-500 ml-auto"/>
                          </div>
                          <div className="mt-4 space-y-3">
                            <Input
                              label="Full name" bordered
                              { ...register('full_name', { required: 'Full name is required' }) }
                              error={ errors?.full_name?.message }
                            />
                            <Input
                              label="Pdf password (Optional)" bordered
                              { ...register('password') }
                              error={ errors?.password?.message }
                            />
                          </div>
                          <Button type="submit" className="mt-8">Begin analysis</Button>
                        </form>
                      </div>
                    )
                  }
                </>
              )
            }
          </>
        )
      }
    </Drawer>
  );
};

export default NewAnalysis;
