// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/superadmin/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'category',
    path: '/superadmin/category',
    icon: icon('ic_user'),
  },
  {
    title: 'brand',
    path: '/superadmin/brand',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/superadmin/product',
    icon: icon('ic_user'),
  },
  {
    title: 'product list',
    path: '/superadmin/products',
    icon: icon('ic_cart'),
  },
];

export default navConfig;
