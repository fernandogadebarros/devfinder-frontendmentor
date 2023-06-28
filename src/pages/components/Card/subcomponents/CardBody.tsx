import { usePageContext } from 'context/PageContext';
import { createBoxInformations, createLinks } from 'data';
import { validateData } from 'utils';

export default function CardBody() {
  const { data } = usePageContext();
  const cssBio =
    data?.bio === null ? 'dark:text-white/80' : 'dark:text-dark-paragraph';

  return (
    <div className="card--body">
      <p className={`card--body-bio ${cssBio}`}>
        {validateData(data?.bio || null, 'There is no Bio')}
      </p>
      <div className="card--body-box-information">
        {createBoxInformations(data).map((item) => (
          <span key={item.id}>
            <h3 className="card--body-box-information-title">{item.title}</h3>
            <h4 className="card--body-box-information-data">{item.data}</h4>
          </span>
        ))}
      </div>
      <ul className="card--body-links">
        {createLinks(data).map((link) => {
          const isAvailable =
            link.text === 'Not Available'
              ? 'text-gray-400 dark:text-white/40'
              : 'text-light-paragraph-100 dark:text-dark-paragraph';

          return (
            <li key={link.id} className={`card--body-list  ${isAvailable}`}>
              <span>{link.icon}</span>
              <a
                className="truncate overflow-hidden"
                {...(link.href && {
                  href: link.href,
                  target: '_blank',
                  rel: 'noreferrer'
                })}
              >
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
