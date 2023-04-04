// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/admin/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/admin/user',
    icon: icon('ic_user'),
  },
  {
    title: 'admin',
    path: '/admin/admin',
    icon: icon('ic_user'),
  },
  {
    title: 'category',
    path: '/admin/category',
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
