import { useParams } from 'react-router-dom';

export function BlogWithTitle() {
  const { id, title } = useParams();
  return (
    <div>
      <h3>BlogWithTitle</h3>
      <div>
        <span>id:</span>
        <span>{id}</span>
      </div>
      <div>
        <span>title:</span>
        <span>{title}</span>
      </div>
    </div>
  );
}
