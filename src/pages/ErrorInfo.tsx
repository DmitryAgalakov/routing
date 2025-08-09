import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export function ErrorInfo() {
  const error = useRouteError() as Response;
  console.log('My error: ', error);
  if (isRouteErrorResponse(error)) {
    // ВЫполнится, если ошибка произошла на уровне роутинга.
  } else {
    // Иначе здесь делаем throw new exception, который будет обрабатыватсья ErrorBoundary.
  }
  return (
    <div>
      <h1>{error.status}</h1>
      <h1>{error.statusText}</h1>
    </div>
  );
}
