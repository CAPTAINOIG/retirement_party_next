import Card from '@/components/global/Card';
import Button from '@/components/global/Button';

const positions = [
  {
    title: `Data Analyst`,
    description: `Are you passionate about data analysis and AI? Join our team of experts to analyze data from multiple sectors, providing valuable insights to our clients.`,
  },
  {
    title: `Sales and Marketing Specialist`,
    description: `If you have a knack for promoting innovative solutions and building client relationships across various sectors, we want you to help us expand our reach and impact.`,
  },
  {
    title: `Software Engineer`,
    description: `Join our development team to build and maintain cutting-edge AI tools that empower businesses with insights, no matter their industry.`,
  },
];

const OpenPositions = () => {
  return (
    <section aria-label="Our services" className="container">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="relative lg:col-span-4">
          <div className="sticky top-36 text-center lg:text-left">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Open positions</h2>
            <p className="mt-4">Do you crave a challenge and love to innovate? Then we have a role for you.</p>
          </div>
        </div>
        <div className="space-y-6 lg:col-span-8">
          {positions.map((p) => (
            <Card key={p.title} className="subtle-shadow flex flex-col px-12 py-10 md:flex-row md:items-center">
              <div className="flex-1">
                <h4 className="text-lg font-medium">{p.title}</h4>
                <p className="mt-2 opacity-80">{p.description}</p>
              </div>
              <a
                href={`mailto:jobs@statisense.co?subject=Application for ${p.title}`}
                target="_blank"
                className="mt-4 md:mt-0 md:ml-4"
              >
                <Button variant="subtle">Apply</Button>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
