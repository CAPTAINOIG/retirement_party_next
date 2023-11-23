import SendMessageForm from '@/components/core/contact/SendMessageForm';
import PageHeader from '@/components/core/shared/PageHeader';
import ContactCategories from '@/components/core/contact/ContactCategories';
import ConnectWithUs from '@/components/core/contact/ConnectWithUs';
import DefaultLayout from '@/components/core/DefaultLayout';
import Head from 'next/head';
import DefaultHeadTags from '@/components/others/DefaultHeadTags';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Get in touch • Statisense</title>
        <DefaultHeadTags />
      </Head>
      <div className="bg-slate-50">
        <PageHeader
          title="We'd love to hear from you"
          subtitle="Have any questions or feedback? We'd love to hear from you"
        >
          <div className="h-4" slot="append"></div>
        </PageHeader>
        <div className="py-20 md:py-28 space-y-36">
          <div className="container space-y-24">
            <ContactCategories />
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <ConnectWithUs />
              </div>
              <div>
                <SendMessageForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Contact.Layout = DefaultLayout;

export default Contact;
