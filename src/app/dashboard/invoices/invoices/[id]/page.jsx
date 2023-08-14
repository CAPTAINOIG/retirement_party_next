"use client"
import React, { useState } from 'react';
import { useDeleteInvoice, useGetInvoice } from "@/api/invoice";
import { useGetUserBusiness } from "@/api/business";
import Link from "next/link";
import IconButton from "@/components/global/IconButton";
import { IconChevronLeft, IconDotsVertical, IconTrash } from "@tabler/icons-react";
import SimpleDropdown from "@/components/global/SimpleDropdown";
import Card from "@/components/global/Card";
import Image from "@/components/core/shared/Image";
import InvoiceDetails from "@/components/core/dashboard/invoices/InvoiceDetails";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import Button from "@/components/global/Button";
import Modal from "@/components/global/Modal";
import { useQueryClient } from "@tanstack/react-query";

const InvoiceDetailsPage = ({ params: { id } }) => {
  const toast = useToast();
  const router = useRouter();
  const qc = useQueryClient();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { data: business } = useGetUserBusiness();
  const { data: { invoice } = {}, isLoading: isInvoiceLoading } = useGetInvoice(business._id, id);
  const { mutateAsync: deleteInvoice, isLoading: isDeleteLoading } = useDeleteInvoice(business._id, id);

  const handleDelete = async () => {
    try {
      await deleteInvoice(null);
      router.replace('/dashboard/invoices/invoices');
      await qc.invalidateQueries(['invoices'])
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <>
      {
        isInvoiceLoading ? (
          <>
            <div className="bg-slate-200 rounded-2xl w-[150px] py-4"></div>
            <div className="bg-slate-200 rounded-2xl w-[190px] md:w-[200px] py-4 mt-4"></div>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-slate-200 rounded-2xl w-full h-[300px]"></div>
              <div className="bg-slate-200 rounded-2xl w-full h-[300px]"></div>
            </div>
          </>
        ) : (
          <>
            {
              !!invoice ? (
                <>
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center space-x-3">
                      <Link href={ "/dashboard/invoices/invoices" }>
                        <IconButton
                          variant="subtle" color="black" size="sm" rounded icon={ <IconChevronLeft size="20"/> }
                        />
                      </Link>
                      <h3 className="text-xl font-medium">
                        Invoice { !!invoice.number ? <>(#{ invoice.number })</> : <>details</> }
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-4">
                      <SimpleDropdown
                        trigger={
                          <IconButton
                            variant="text" size="sm" icon={ <IconDotsVertical size="20"/> } color="black" rounded
                          />
                        }
                        items={ [
                          {
                            text: <div className="text-red-600">Delete invoice</div>,
                            icon: <IconTrash size="20" className="text-red-600"/>,
                            onClick: () => setIsDeleteOpen(true)
                          },
                        ] }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-11 gap-6 items-start">
                    <Card className="col-span-5 overflow-hidden sticky top-10">
                      <Image src={ invoice.file } alt="Invoice"/>
                    </Card>
                    <InvoiceDetails invoice={ invoice }/>
                  </div>
                </>
              ) : (
                <>Could not fetch invoice</>
              )
            }
          </>
        )
      }

      <Modal isOpen={ isDeleteOpen } onClose={ () => setIsDeleteOpen(false) } size="sm">
        <h4 className="text-lg font-semibold">Delete invoice #{ invoice?.number }</h4>
        <p className="mt-1">Are you sure you want to continue?</p>
        <div className="mt-5 flex items-center space-x-2 justify-end">
          <Button
            onClick={ () => setIsDeleteOpen(false) } color="black" size="sm" variant="outlined"
            disabled={ isDeleteLoading }
          >
            Go back
          </Button>
          <Button onClick={ handleDelete } color="red" size="sm" variant="outlined" loading={ isDeleteLoading }>
            Yes delete
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default InvoiceDetailsPage;
