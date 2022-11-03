import React, { useContext } from "react";
import { PropTypes } from "prop-types";
import { Switch, Route } from "react-router-dom";
import { ThemeContext } from "./ThemeWrapper";
import Dashboard from "../Templates/Dashboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  PersonalDashboard,
  CrmDashboard,
  CryptoDashboard,
  Infographics,
  MiniApps,
  Analytics,
  InfoUpdates,
  Status,
  Parent,
  AppLayout,
  Responsive,
  Grid,
  SimpleTable,
  AdvancedTable,
  TablePlayground,
  TreeTable,
  EditableCell,
  ReduxForm,
  DateTimePicker,
  CheckboxRadio,
  Switches,
  Selectbox,
  Rating,
  SliderRange,
  Buttons,
  DialButton,
  ToggleButton,
  Textbox,
  Autocomplete,
  Upload,
  TextEditor,
  Avatars,
  Accordion,
  Badges,
  List,
  PopoverTooltip,
  Snackbar,
  Typography,
  Tabs,
  Cards,
  ImageGrid,
  Progress,
  DialogModal,
  Steppers,
  Paginations,
  DrawerMenu,
  Breadcrumbs,
  Icons,
  IonIcons,
  SliderCarousel,
  Tags,
  Dividers,
  LineCharts,
  BarCharts,
  AreaCharts,
  PieCharts,
  RadarCharts,
  ScatterCharts,
  CompossedCharts,
  DoughnutCharts,
  BarDirection,
  LineScatterChart,
  AreaFilledChart,
  RadarPolarCharts,
  Contact,
  Chat,
  Email,
  TaskBoard,
  Ecommerce,
  Timeline,
  Calendar,
  ProductPage,
  Invoice,
  Profile,
  BlankPage,
  Photos,
  Pricing,
  CheckoutPage,
  Error,
  Settings,
  HelpSupport,
  MapMarker,
  MapDirection,
  SearchMap,
  TrafficIndicator,
  StreetViewMap,
  NotFound,
  addUser,
  listUser,
  userSettings,
  addBanner,
  addGifts,
  addPromotion,
  listBroadcast,
  viewBroadcast,
  changePassword,
} from "../pageListAsync";
// import listUser from '../Pages/User/listUser';

function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);
  return (
    <Dashboard history={history} changeMode={changeMode}>
      <ToastContainer />
      <Switch>
        {/* User Routes */}
        <Route path="/dashboard/user/add-user" component={addUser} />
        <Route path="/dashboard/user/list-user" component={listUser} />
        {/* User Routes */}
        <Route path="/dashboard/gifts/add-gifts" component={addGifts} />
        <Route path="/dashboard/user/user-settings" component={userSettings} />
        {/* Banner Routes */}
        <Route path="/dashboard/banner/add-banner" component={addBanner} />
        { /* Promotions Routes */}
        <Route path="/dashboard/promotion/add-promotions" component={addPromotion} />
        { /* Broadcast Routes */}
        <Route path="/dashboard/broadcasts/list-broadcast" component={listBroadcast} />
        <Route path="/dashboard/broadcasts/view-broadcast" component={viewBroadcast} />
        {/* Password Routes */}
        {/* <Route
          path="/dashboard/password/change-password"
          component={changePassword}
        /> */}
        {/* Home */}
        <Route exact path="/dashboard" component={PersonalDashboard} />
        <Route path="/dashboard/crm-dashboard" component={CrmDashboard} />
        <Route path="/dashboard/crypto-dashboard" component={CryptoDashboard} />
        {/* Widgets */}
        <Route path="/dashboard/widgets/infographics" component={Infographics} />
        <Route path="/dashboard/widgets/status" component={Status} />
        <Route path="/dashboard/widgets/mini-apps" component={MiniApps} />
        <Route path="/dashboard/widgets/analytics" component={Analytics} />
        <Route path="/dashboard/widgets/info-updates" component={InfoUpdates} />
        {/* Layout */}
        <Route exact path="/dashboard/layouts" component={Parent} />
        <Route path="/dashboard/layouts/grid" component={Grid} />
        <Route path="/dashboard/layouts/app-layout" component={AppLayout} />
        <Route path="/dashboard/layouts/responsive" component={Responsive} />
        {/* Table */}
        <Route exact path="/dashboard/tables" component={Parent} />
        <Route path="/dashboard/tables/basic-table" component={SimpleTable} />
        <Route path="/dashboard/tables/data-table" component={AdvancedTable} />
        <Route
          path="/dashboard/tables/table-playground"
          component={TablePlayground}
        />
        <Route path="/dashboard/tables/tree-table" component={TreeTable} />
        <Route path="/dashboard/tables/editable-cell" component={EditableCell} />
        {/* Form & Button */}
        <Route exact path="/dashboard/forms" component={Parent} />
        <Route path="/dashboard/forms/reduxform" component={ReduxForm} />
        <Route path="/dashboard/forms/date-time-picker" component={DateTimePicker} />
        <Route path="/dashboard/forms/checkbox-radio" component={CheckboxRadio} />
        <Route path="/dashboard/forms/switches" component={Switches} />
        <Route path="/dashboard/forms/selectbox" component={Selectbox} />
        <Route path="/dashboard/forms/ratting" component={Rating} />
        <Route path="/dashboard/forms/slider-range" component={SliderRange} />
        <Route path="/dashboard/forms/buttons" component={Buttons} />
        <Route path="/dashboard/forms/toggle-button" component={ToggleButton} />
        <Route path="/dashboard/forms/dial-button" component={DialButton} />
        <Route path="/dashboard/forms/textfields" component={Textbox} />
        <Route path="/dashboard/forms/autocomplete" component={Autocomplete} />
        <Route path="/dashboard/forms/upload" component={Upload} />
        <Route path="/dashboard/forms/wysiwyg-editor" component={TextEditor} />
        {/* Ui Components */}
        <Route exact path="/dashboard/ui" component={Parent} />
        <Route path="/dashboard/ui/avatars" component={Avatars} />
        <Route path="/dashboard/ui/accordion" component={Accordion} />
        <Route path="/dashboard/ui/badges" component={Badges} />
        <Route path="/dashboard/ui/list" component={List} />
        <Route path="/dashboard/ui/popover-tooltip" component={PopoverTooltip} />
        <Route path="/dashboard/ui/snackbar" component={Snackbar} />
        <Route path="/dashboard/ui/typography" component={Typography} />
        <Route path="/dashboard/ui/tabs" component={Tabs} />
        <Route path="/dashboard/ui/card-papper" component={Cards} />
        <Route path="/dashboard/ui/image-grid" component={ImageGrid} />
        <Route path="/dashboard/ui/progress" component={Progress} />
        <Route path="/dashboard/ui/dialog-modal" component={DialogModal} />
        <Route path="/dashboard/ui/steppers" component={Steppers} />
        <Route path="/dashboard/ui/paginations" component={Paginations} />
        <Route path="/dashboard/ui/drawer-menu" component={DrawerMenu} />
        <Route path="/dashboard/ui/breadcrumbs" component={Breadcrumbs} />
        <Route path="/dashboard/ui/icons" component={Icons} />
        <Route path="/dashboard/ui/ionicons" component={IonIcons} />
        <Route path="/dashboard/ui/slider-carousel" component={SliderCarousel} />
        <Route path="/dashboard/ui/tags" component={Tags} />
        <Route path="/dashboard/ui/dividers" component={Dividers} />
        {/* Chart */}
        <Route exact path="/dashboard/charts" component={Parent} />
        <Route path="/dashboard/charts/line-charts" component={LineCharts} />
        <Route path="/dashboard/charts/bar-charts" component={BarCharts} />
        <Route path="/dashboard/charts/area-charts" component={AreaCharts} />
        <Route path="/dashboard/charts/pie-charts" component={PieCharts} />
        <Route path="/dashboard/charts/radar-charts" component={RadarCharts} />
        <Route path="/dashboard/charts/scatter-charts" component={ScatterCharts} />
        <Route path="/dashboard/charts/compossed-chart" component={CompossedCharts} />
        <Route
          path="/dashboard/charts/doughnut-pie-charts"
          component={DoughnutCharts}
        />
        <Route
          path="/dashboard/charts/bar-direction-charts"
          component={BarDirection}
        />
        <Route
          path="/dashboard/charts/line-scatter-charts"
          component={LineScatterChart}
        />
        <Route
          path="/dashboard/charts/area-filled-charts"
          component={AreaFilledChart}
        />
        <Route
          path="/dashboard/charts/radar-polar-chart"
          component={RadarPolarCharts}
        />
        {/* Sample Apps */}
        <Route path="/dashboard/pages/contact" component={Contact} />
        <Route path="/dashboard/pages/chat" component={Chat} />
        <Route path="/dashboard/pages/email" component={Email} />
        <Route path="/dashboard/pages/timeline" component={Timeline} />
        <Route path="/dashboard/pages/ecommerce" component={Ecommerce} />
        <Route path="/dashboard/pages/product-detail" component={ProductPage} />
        <Route path="/dashboard/pages/checkout" component={CheckoutPage} />
        <Route path="/dashboard/pages/calendar" component={Calendar} />
        <Route path="/dashboard/pages/taskboard" component={TaskBoard} />
        <Route path="/dashboard/pages/invoice" component={Invoice} />
        {/* Pages */}
        <Route exact path="/dashboard/pages" component={Parent} />
        <Route path="/dashboard/pages/user-profile" component={Profile} />
        <Route path="/dashboard/pages/blank-page" component={BlankPage} />
        <Route path="/dashboard/pages/photo-gallery" component={Photos} />
        <Route path="/dashboard/pages/pricing" component={Pricing} />
        <Route path="/dashboard/pages/not-found" component={NotFound} />
        <Route path="/dashboard/pages/error" component={Error} />
        <Route path="/dashboard/pages/settings" component={Settings} />
        <Route path="/dashboard/pages/help-support" component={HelpSupport} />
        {/* Map */}
        <Route exact path="/dashboard/maps" component={Parent} />
        <Route path="/dashboard/maps/map-marker" component={MapMarker} />
        <Route path="/dashboard/maps/map-direction" component={MapDirection} />
        <Route path="/dashboard/maps/map-searchbox" component={SearchMap} />
        <Route path="/dashboard/maps/map-traffic" component={TrafficIndicator} />
        <Route path="/dashboard/maps/street-view" component={StreetViewMap} />
        {/* Default */}
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;
