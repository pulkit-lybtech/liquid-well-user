import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Theme']
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Dialogue',
    to: '/dialogue',
    icon: 'cil-drop',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dialogue View',
        to: '/dialogue',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Dialogue Select ',
        to: '/dialogue-select',
            badge: {
      color: 'info',
      text: 'TEST',
    }
      },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'D-Tor',
    to: '/dtor',
    icon: 'cil-pencil',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'View DTor',
        to: '/dtor',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'DTor ',
        to: '/DTORselect',
            badge: {
      color: 'info',
      text: 'TEST',
    }
      },
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Credits',
    to: '/credits',
    icon: 'cil-pencil',
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Results',
    route: '/results',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'View Results',
        to: '/results',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Result',
        to: '/add-result',
      },
     
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Certifications',
    to: '/certifications',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Progress Graph',
    to: '/progress',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Subscription',
    to: '/subscription',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Upgrade',
    to: '/upgrade',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Settings',
    route: '/settings',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Edit Profile',
        to: '/edit-profile',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Change Password',
        to: '/change-password',
      },
    ]
  },
  
 
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  
]

export default _nav
