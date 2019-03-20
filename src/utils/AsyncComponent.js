import LoadingComponent from '@/pages/LoadingComponent';
import ErrorComponent from '@/pages/ErrorComponent';

const AsyncWrappedComponent = (path) => {;

  const AsyncComponent = () => ({
    component: import (/* webpackChunkName: "[request]" */`@/pages/${path}`),
    loading: LoadingComponent,
    error: ErrorComponent,
    delay: 200,
    timeout: 3000
  })

  return Promise.resolve({
    render(wrapper) {
      return wrapper(AsyncComponent)
    },
  })
}

export default AsyncWrappedComponent;