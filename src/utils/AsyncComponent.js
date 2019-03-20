import LoadingComponent from '@/components/LoadingComponent';
import ErrorComponent from '@/components/ErrorComponent';

const AsyncWrappedComponent = (path, type) => {
  let curpath = type == 1 ? 'components' : 'pages';

  const AsyncComponent = () => ({
    component: import (`@/${curpath}/${path}`),
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