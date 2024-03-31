export type BreadcrumbProps = {
  label: string;
  url: string;
};

const Breadcrumb = ({ items }: any) => {
  return (
    <ol className='list-none p-0'>
      {items.map((item: BreadcrumbProps, index: number) => (
        <li key={index} className='inline-block text-sm font-thin'>
          <a href={item.url} className=' hover:underline'>
            {item.label}
          </a>
          {index !== items.length - 1 && <span className='mx-2'>/</span>}
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumb;
