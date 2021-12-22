import React, { useState } from 'react'
import "./AddCompany.scss";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { client } from "../../utils/network";

import { TabLinks, Typography } from "../../ui";
import { Card } from "../../widgets";
import { Formik } from "formik";

import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { addCompany } from "../../redux/actions"
import { useDispatch, useSelector } from 'react-redux'


const useStyles = makeStyles((theme) => ({
    root: {

        '& > *': {
            margin: theme.spacing(1),
            width: '45ch',
            margin: '0 auto',
            paddingTop: '70px'
        }
    },
}));



function AddCompany() {
    const [state, setState] = useState({
        name: '',
        email: '',
        contact: '',
        adress: '',
    })
    const classes = useStyles();
    const [error, setError] = useState('')
    const { name, email, contact, adress } = state
    const dispatch = useDispatch();


    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact || !adress) {
            setError('Please fill the fields')
        } else {
            dispatch(addCompany(state))
        }

        setError('')
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({...state, [name]: value })
    }



    return ( <
        div className = "AddCompany" >
        <
        Typography variant = "h1"
        color = "dark-gray" >
        Создание кампании <
        /Typography> <
        Card >
        <
        TabLinks >
        <
        NavLink end to = "" >
        Основные настройки <
        /NavLink> <
        NavLink to = "media-plan" > Медиа план < /NavLink> <
        NavLink to = "audience" > Аудитория < /NavLink> <
        NavLink to = "optimisation" > Оптимизация < /NavLink> <
        NavLink to = "banners" > Баннеры < /NavLink> <
        /TabLinks>

        <
        div >

        <
        form onSubmit = { handleSubmit }
        className = { classes.root }
        style = {
            { width: '500px', margin: '0 auto', height: '500px', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' } } >
        <
        FormGroup noValidate autoComplete = 'off' >
        <
        FormControl >
        <
        TextField name = 'name'
        type = 'text'
        value = { name }
        id = 'standart-basic'
        label = 'name'
        onChange = { handleChange }
        /> <
        /FormControl> <
        br / >
        <
        FormControl >
        <
        TextField name = 'email'
        type = 'email'
        value = { email }
        id = 'standart-basic'
        label = 'email'
        onChange = { handleChange }
        /> <
        /FormControl> <
        br / >
        <
        FormControl >
        <
        TextField name = 'contact'
        type = 'number'
        value = { contact }
        id = 'standart-basic'
        label = 'contact'
        onChange = { handleChange }
        /> <
        /FormControl> <
        br / >
        <
        FormControl >
        <
        TextField name = 'adress'
        type = 'text'
        value = { adress }
        id = 'standart-basic'
        label = 'adress'
        onChange = { handleChange }
        /> <
        /FormControl> <
        br / >
        <
        br / >
        <
        br / >
        <
        Button type = 'submit'
        variant = 'contained'
        color = "primary" > Create User < /Button> <
        /FormGroup> <
        /form>

        <
        /div> <
        /Card> <
        /div>
    );
}

export default AddCompany;

/* // initialValues={{ */
//   basic_config: {
//     name: "",
//     site: "",
//     daily_budget: "",
//     full_budget: "",
//     distribution_budget: "",
//     target_type: "",
//     metric_counter: {
//       email: "",
//       id: "",
//     },
//     use_programmatic_pixel: false,
//   },
//   media_plan: {
//     position: "TYPE_1",
//     date_start: "",
//     date_end: "",
//     device_type: {
//       enable_mobile: false,
//       enable_desktop: false,
//     },
//     channels: {
//       mobile_apps: [],
//       mobile_apps_excluded: [],
//       social_networks: [],
//       social_networks_excluded: [],
//       search_engine: [],
//       search_engine_excluded: [],
//     },
//     concurrent_list: "",
//     max_impressions: "",
//     max_banner_impressions: "",
//     max_impressions_uniq: "",
//     show_schedules: {
//       mon: [],
//       tue: [],
//       wed: [],
//       thu: [],
//       fri: [],
//       sat: [],
//       sun: [],
//       flags: [],
//     },
//   },
//   optimization: {
//     optimization_target: "",
//     optimization_types: "",
//     budget: {
//       max_impressions: "",
//       fix_price: "",
//       min_consumption: "",
//       optimal_score: "",
//     },
//   },
// }}
// onSubmit={async (values) => {
//   // console.log(pathname, "-- path");
//   try {
//     await client.post("/api/v1/campaigns", {
//       ...values,
//       media_plan: {
//         ...values.media_plan,
//         max_impressions: Number(values.media_plan.max_impressions),
//         max_banner_impressions: Number(
//           values.media_plan.max_banner_impressions
//         ),
//         max_impressions_uniq: Number(
//           values.media_plan.max_impressions_uniq
//         ),
//         concurrent_list:
//           values.media_plan.concurrent_list.split(", "),
//       },
//     });
//     if (pathname === "/add-company") {
//       return navigate("/add-company/media-plan");
//     } else if (pathname === "/add-company/media-plan") {
//       return navigate("/add-company/audience");
//     }
//   } catch (error) {
//     console.error("Failed push form.", { error });
//   }
// }}