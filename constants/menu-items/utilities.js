import DashboardIcon from '@mui/icons-material/Dashboard';

// constant
const icons = {
  DashboardIcon
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: '',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Typography',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.DashboardIcon,
      breadcrumbs: false,
      main: true,
    },
    {
      id: 'util-color',
      title: 'Color',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.DashboardIcon,
      breadcrumbs: false,
      main: true,
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/utils/util-shadow',
      icon: icons.DashboardIcon,
      breadcrumbs: false,
      main: true,
    },
    {
      id: 'icons',
      title: 'Icons',
      type: 'collapse',
      icon: icons.DashboardIcon,
      main: true,
      children: [
        {
          id: 'tabler-icons',
          title: 'Tabler Icons',
          type: 'item',
          url: '/icons/tabler-icons',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Material Icons',
          type: 'item',
          url: '/icons/material-icons',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default utilities;
