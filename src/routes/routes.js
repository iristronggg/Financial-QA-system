import DashboardLayout from '../layout/DashboardLayout.vue'
import DashboardLayoutTopNav from '../layout/DashboardLayoutTopNav.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import About from 'src/pages/About.vue'
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'
import Login from 'src/pages/Login.vue'
import Register from 'src/pages/Register.vue'
import AskQuestionsChooseCompany from 'src/pages/AskQuestionsChooseCompany.vue'
import AskQuestions from 'src/pages/AskQuestions.vue'
import RecordsChooseCompany from 'src/pages/RecordsChooseCompany.vue'
import Records from 'src/pages/Records.vue'

const routes = [{
        path: '/',
        //name: 'About',
        component: DashboardLayout,
        redirect: '/about',
        children: [{
                path: 'about',
                name: 'About',
                component: About,
            },
            {
                path: 'login',
                name: 'Login',
                component: Login,
            },
            {
                path: 'register',
                name: 'Register',
                component: Register,
            },
            {
                path: 'overview',
                name: 'Overview',
                component: Overview
            }
        ]
    },
    {
        path: '/admin',
        component: DashboardLayoutTopNav,
        //redirect: '/admin/overview',
        children: [{
                path: 'askQuestionsChooseCompany',
                name: 'AskQuestionsChooseCompany',
                component: AskQuestionsChooseCompany,
            },

            {
                path: 'askQuestions',
                name: 'AskQuestions',
                component: AskQuestions,
            },

            {
                path: 'recordsChooseCompany',
                name: 'RecordsChooseCompany',
                component: RecordsChooseCompany,
                props: true,
            },

            {
                path: 'records',
                name: 'Records',
                component: Records,
                props: true,
            },

            {
                path: 'about',
                name: 'About',
                component: About
            },
            {
                path: 'overview',
                name: 'Overview',
                component: Overview
            },
            {
                path: 'user',
                name: 'User',
                component: UserProfile
            },
            {
                path: 'table-list',
                name: 'Table List',
                component: TableList
            },
            {
                path: 'typography',
                name: 'Typography',
                component: Typography
            },
            {
                path: 'icons',
                name: 'Icons',
                component: Icons
            },
            {
                path: 'maps',
                name: 'Maps',
                component: Maps
            },
            {
                path: 'notifications',
                name: 'Notifications',
                component: Notifications
            },
            {
                path: 'upgrade',
                name: 'Upgrade to PRO',
                component: Upgrade
            }
        ]
    },
    { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes