import ReactDOM from 'react-dom'
// import MiniCart from "../components/shared/header/sections/MiniCart";
import arrowLeft from '../assets/svg/arrowLeft.svg'
import arrowRight from '../assets/svg/arrowRight.svg'
import axios from 'axios'

export function updateGlobalMinicart() {
  const MiniCart = ReactDOM.render(
    <MiniCart />,
    document.getElementById('root')
  )
  MiniCart.updateCart()
}

export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
export function validatePhoneNumber(inputtxt) {
  inputtxt = inputtxt.replace(/\s/g, '')

  var phoneno = /^(\d{8}(\,\d{8}){0,2})$/
  // debugger
  if (phoneno.test(inputtxt)) {
    return true
  } else {
    return false
  }
}

export const countryOptions = [
  //sementic flags
  { key: 'qa', value: 'ar', flag: 'qa', text: 'Qatar' },
  // { key: 'qa', value: 'Qatar', flag: 'qa', text: 'Qatar' }
  // { key: 'us', value: 'en', flag: 'us', text: 'united states' }
]

export function fetchVisitedProducts() {
  let visited_products_handles = localStorage.getItem('visited_products')
  if (visited_products_handles) {
    let body = {
      category_handles: visited_products_handles.replaceAll(' ', '').split(','),
    }

    return axios
      .post(
        process.env.REACT_APP_BACKEND_HOST + '/storefront/visited_products',
        body
      )
      .then((response) => {
        return response.data
      })
  }
}
export function setVisitedProducts(catName) {
  if (catName) {
    catName = catName.replace(' ', '')
    let visitedProducts = localStorage.getItem('visited_products')
    if (visitedProducts) {
      visitedProducts = visitedProducts.split(',')
      visitedProducts = visitedProducts.map((x) => x.replace(' ', ''))
      if (visitedProducts.indexOf(catName) < 0) {
        if (visitedProducts.length >= 11) {
          // debugger
          visitedProducts.shift()
          visitedProducts.push(catName)
          localStorage.setItem('visited_products', visitedProducts)
        } else {
          localStorage.setItem(
            'visited_products',
            catName + ' , ' + localStorage.getItem('visited_products')
          )
        }
      }
    } else {
      localStorage.setItem('visited_products', catName)
    }
  }
}

export const cityOptions = [
  { key: '1', value: 'Bu Fasseela', text: 'Bu Fasseela' },
  { key: '2', value: 'Izghawa (Umm Salal)', text: 'Izghawa (Umm Salal)' },
  { key: '3', value: 'Al Kharaitiyat', text: 'Al Kharaitiyat' },
  { key: '4', value: 'Umm Salal Ali', text: 'Umm Salal Ali' },
  { key: '5', value: 'Umm Salal Mohammed', text: 'Umm Salal Mohammed' },
  { key: '6', value: 'Old Al Ghanim', text: 'Old Al Ghanim' },
  { key: '7', value: 'Al Souq', text: 'Al Souq' },
  { key: '8', value: 'Al Jasrah', text: 'Al Jasrah' },
  { key: '9', value: 'Ad Dawhah al Jadidah', text: 'Ad Dawhah al Jadidah' },
  { key: '10', value: 'Fereej Abdel Aziz', text: 'Fereej Abdel Aziz' },
  { key: '11', value: 'Lekhwair', text: 'Lekhwair' },
  { key: '12', value: 'Al Mearad', text: 'Al Mearad' },
  { key: '13', value: 'Fereej Kulaib', text: 'Fereej Kulaib' },
  { key: '14', value: 'Najma', text: 'Najma' },
  { key: '15', value: 'Al Bidda', text: 'Al Bidda' },
  { key: '16', value: 'Lejbailat', text: 'Lejbailat' },
  { key: '17', value: 'Umm Ghuwailina', text: 'Umm Ghuwailina' },
  { key: '18', value: 'Doha Port', text: 'Doha Port' },
  { key: '19', value: 'Rawdat Al Khail', text: 'Rawdat Al Khail' },
  { key: '20', value: 'Rumeilah', text: 'Rumeilah' },
  { key: '21', value: 'Fereej Bin Mahmoud', text: 'Fereej Bin Mahmoud' },
  { key: '22', value: 'Al Hilal', text: 'Al Hilal' },
  { key: '23', value: 'Al Messila', text: 'Al Messila' },
  { key: '24', value: 'Wadi Al Sail', text: 'Wadi Al Sail' },
  { key: '25', value: 'Madinat Khalifa South', text: 'Madinat Khalifa South' },
  { key: '26', value: 'Al Markhiyah', text: 'Al Markhiyah' },
  { key: '27', value: 'Al Seej', text: 'Al Seej' },
  { key: '28', value: 'Umm Lekhba', text: 'Umm Lekhba' },
  { key: '29', value: 'New Salata', text: 'New Salata' },
  { key: '30', value: 'Hazm Al Markhiya', text: 'Hazm Al Markhiya' },
  { key: '31', value: 'Old Airport', text: 'Old Airport' },
  { key: '32', value: 'Al Khulaifat', text: 'Al Khulaifat' },
  { key: '33', value: 'Al Egla', text: 'Al Egla' },
  { key: '34', value: 'Jabal Thuaileb', text: 'Jabal Thuaileb' },
  { key: '35', value: 'Al Kharayej', text: 'Al Kharayej' },
  { key: '36', value: 'Wadi Al Banat', text: 'Wadi Al Banat' },
  { key: '37', value: 'Nu`ayjah', text: 'Nu`ayjah' },
  { key: '38', value: 'Duhail', text: 'Duhail' },
  { key: '39', value: 'Al Thumama (Doha)', text: 'Al Thumama (Doha)' },
  { key: '40', value: 'Barahat Al Jufairi', text: 'Barahat Al Jufairi' },
  { key: '41', value: 'Fereej Al Asmakh', text: 'Fereej Al Asmakh' },
  { key: '42', value: 'Al Najada', text: 'Al Najada' },
  {
    key: '43',
    value: 'Leqtaifiya (West Bay Lagoon)',
    text: 'Leqtaifiya (West Bay Lagoon)',
  },
  { key: '44', value: 'Fereej Al Nasr', text: 'Fereej Al Nasr' },
  { key: '45', value: 'Jelaiah', text: 'Jelaiah' },
  { key: '46', value: 'Jeryan Nejaima', text: 'Jeryan Nejaima' },
  { key: '47', value: 'New Al Mirqab', text: 'New Al Mirqab' },
  { key: '48', value: 'Al Tarfa', text: 'Al Tarfa' },
  {
    key: '49',
    value: 'Fereej Mohammed Bin Jassim',
    text: 'Fereej Mohammed Bin Jassim',
  },
  { key: '50', value: 'Old Al Hitmi', text: 'Old Al Hitmi' },
  { key: '51', value: 'Al Rufaa', text: 'Al Rufaa' },
  { key: '52', value: 'Al Mirqab', text: 'Al Mirqab' },
  { key: '53', value: 'As Salatah', text: 'As Salatah' },
  { key: '54', value: 'Fereej Bin Durham', text: 'Fereej Bin Durham' },
  { key: '55', value: 'Al Mansoura', text: 'Al Mansoura' },
  { key: '56', value: 'Dahl Al Hamam', text: 'Dahl Al Hamam' },
  { key: '57', value: 'Madinat Khalifa North', text: 'Madinat Khalifa North' },
  { key: '58', value: 'Fereej Bin Omran', text: 'Fereej Bin Omran' },
  { key: '59', value: 'Hamad Medical City', text: 'Hamad Medical City' },
  { key: '60', value: 'New Al Hitmi', text: 'New Al Hitmi' },
  { key: '61', value: 'The Pearl', text: 'The Pearl' },
  { key: '62', value: 'Industrial Area', text: 'Industrial Area' },
  {
    key: '63',
    value: 'Doha International Airport',
    text: 'Doha International Airport',
  },
  { key: '64', value: 'Mushayrib', text: 'Mushayrib' },
  { key: '65', value: 'Al Dafna', text: 'Al Dafna' },
  { key: '66', value: 'Al Qassar', text: 'Al Qassar' },
  { key: '67', value: 'Ras Abu Aboud', text: 'Ras Abu Aboud' },
  { key: '68', value: 'Al Sadd', text: 'Al Sadd' },
  { key: '69', value: 'Onaiza', text: 'Onaiza' },
  { key: '70', value: 'Al Mashaf', text: 'Al Mashaf' },
  {
    key: '71',
    value: 'Al Thumama (Al Wakrah)',
    text: 'Al Thumama (Al Wakrah)',
  },
  { key: '72', value: 'Al Wukair', text: 'Al Wukair' },
  {
    key: '73',
    value: 'Mesaieed Industrial Area',
    text: 'Mesaieed Industrial Area',
  },
  { key: '74', value: 'Al Wakrah', text: 'Al Wakrah' },
  { key: '75', value: 'Mesaieed', text: 'Mesaieed' },
  { key: '76', value: 'Shagra', text: 'Shagra' },
  { key: '77', value: 'Al Karaana', text: 'Al Karaana' },
  { key: '78', value: 'Khawr al Udayd', text: 'Khawr al Udayd' },
  { key: '79', value: 'Al Kharrara', text: 'Al Kharrara' },
  { key: '87', value: 'Al Aziziya', text: 'Al Aziziya' },
  { key: '88', value: 'Bu Sidra', text: 'Bu Sidra' },
  { key: '89', value: 'Fereej Al Murra', text: 'Fereej Al Murra' },
  { key: '90', value: 'Fereej Al Manaseer', text: 'Fereej Al Manaseer' },
  { key: '91', value: 'New Fereej Al Ghanim', text: 'New Fereej Al Ghanim' },
  { key: '92', value: 'Al Sailiya', text: 'Al Sailiya' },
  { key: '93', value: 'Al Waab', text: 'Al Waab' },
  { key: '94', value: 'Bani Hajer', text: 'Bani Hajer' },
  { key: '95', value: 'Gharrafat Al Rayyan', text: 'Gharrafat Al Rayyan' },
  { key: '96', value: 'Al Gharrafa', text: 'Al Gharrafa' },
  { key: '97', value: 'Izghawa (Al Rayyan)', text: 'Izghawa (Al Rayyan)' },
  { key: '98', value: 'Rawdat Egdaim', text: 'Rawdat Egdaim' },
  { key: '99', value: 'Al Themaid', text: 'Al Themaid' },
  { key: '100', value: 'Abu Hamour', text: 'Abu Hamour' },
  { key: '101', value: 'Ain Khaled', text: 'Ain Khaled' },
  { key: '102', value: 'Bu Samra', text: 'Bu Samra' },
  { key: '103', value: 'Fereej Al Asiri', text: 'Fereej Al Asiri' },
  { key: '104', value: 'Mesaimeer', text: 'Mesaimeer' },
  { key: '105', value: 'Al Mamoura', text: 'Al Mamoura' },
  {
    key: '106',
    value: 'New Fereej Al Khulaifat',
    text: 'New Fereej Al Khulaifat',
  },
  { key: '107', value: 'New Al Rayyan', text: 'New Al Rayyan' },
  { key: '108', value: 'Al Wajba', text: 'Al Wajba' },
  { key: '109', value: 'Fereej Al Zaeem', text: 'Fereej Al Zaeem' },
  { key: '110', value: 'Lebday', text: 'Lebday' },
  { key: '111', value: 'Al Luqta', text: 'Al Luqta' },
  { key: '112', value: 'Old Al Rayyan', text: 'Old Al Rayyan' },
  { key: '113', value: 'Al Shagub', text: 'Al Shagub' },
  { key: '114', value: 'Baaya', text: 'Baaya' },
  { key: '115', value: 'Fereej Al Amir', text: 'Fereej Al Amir' },
  { key: '116', value: 'Luaib', text: 'Luaib' },
  { key: '117', value: 'Mehairja', text: 'Mehairja' },
  { key: '118', value: 'Muraikh', text: 'Muraikh' },
  { key: '119', value: 'Mebaireek', text: 'Mebaireek' },
  { key: '120', value: 'Al-Shahaniya', text: 'Al-Shahaniya' },
  { key: '121', value: 'Dukhan', text: 'Dukhan' },
  { key: '122', value: 'Al Nasraniya', text: 'Al Nasraniya' },
  { key: '123', value: 'Rawdat Rashed', text: 'Rawdat Rashed' },
  { key: '124', value: 'Umm Bab', text: 'Umm Bab' },
  { key: '125', value: 'Sawda Natheel', text: 'Sawda Natheel' },
  { key: '126', value: 'Lijmiliya', text: 'Lijmiliya' },
  { key: '127', value: 'Al Utouriya', text: 'Al Utouriya' },
  { key: '128', value: 'Abu Samra', text: 'Abu Samra' },
  { key: '129', value: 'Muaither', text: 'Muaither' },
  { key: '130', value: 'Fereej Al Soudan', text: 'Fereej Al Soudan' },
]

export const keesLogoHeader = (
  <svg
    width='143'
    height='54'
    viewBox='0 0 143 54'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clip-path='url(#clip0)'>
      <path
        d='M49.1038 43.7353H48.2253L44.4377 51.9685H45.3995L46.3849 49.8081H50.9084L51.8822 51.9685H52.8914L49.1038 43.7353ZM50.5405 48.9788H46.7531L48.6527 44.8096L50.5405 48.9788ZM56.2394 48.5117C56.2394 47.3789 57.0225 46.6197 58.0797 46.6197C59.1602 46.6197 59.7775 47.3205 59.7775 48.4415V51.9685H60.6911V48.2198C60.6911 46.7834 59.8243 45.8024 58.3402 45.8024C57.9136 45.7903 57.4919 45.894 57.1212 46.102C56.7505 46.3101 56.4452 46.6145 56.2388 46.9819V45.9308H55.3252V51.9685H56.2388L56.2394 48.5117ZM68.979 45.9308H68.0059L66.0346 50.9641L63.8025 45.9308H62.7932L65.583 51.9451C65.215 52.7977 64.8706 53.0778 64.3245 53.0778C63.9897 53.0876 63.6582 53.0111 63.3628 52.8559L63.0544 53.5684C63.4582 53.7726 63.9065 53.8768 64.3604 53.872C65.2864 53.872 65.8801 53.4166 66.4025 52.167L68.979 45.9308ZM72.6121 46.725H74.5592V45.9308H72.6121V44.109H71.6985V45.9308H70.8436V46.725H71.6985V50.3686C71.6985 51.5948 72.4465 52.0736 73.4319 52.0736C73.8159 52.0801 74.1956 51.9918 74.536 51.8169V51.0466C74.2608 51.1862 73.9553 51.2583 73.6456 51.2568C73.0282 51.2568 72.6127 50.9882 72.6127 50.2524L72.6121 46.725ZM78.0379 48.5118C78.0379 47.3791 78.821 46.6199 79.8782 46.6199C80.9587 46.6199 81.576 47.3206 81.576 48.4417V51.9685H82.4896V48.2198C82.4896 46.7834 81.6228 45.8024 80.1387 45.8024C79.7121 45.7903 79.2904 45.894 78.9197 46.102C78.549 46.3101 78.2437 46.6145 78.0373 46.9819V43.4434H77.1236V51.9685H78.0373L78.0379 48.5118ZM86.4561 44.6113V43.6186H85.412V44.6113H86.4561ZM86.3845 51.9685V45.9308H85.4709V51.9685H86.3845ZM90.3739 48.5118C90.3739 47.3791 91.157 46.6199 92.2141 46.6199C93.2947 46.6199 93.912 47.3206 93.912 48.4417V51.9685H94.8267V48.2198C94.8267 46.7834 93.96 45.8024 92.4758 45.8024C92.0492 45.7903 91.6275 45.894 91.2568 46.102C90.8861 46.3101 90.5808 46.6145 90.3744 46.9819V45.9308H89.4608V51.9685H90.3744L90.3739 48.5118ZM103.565 50.9174V45.9308H102.651V47.0169C102.383 46.6371 102.024 46.3278 101.605 46.1161C101.187 45.9043 100.723 45.7966 100.253 45.8023C99.8707 45.798 99.4916 45.8692 99.138 46.0117C98.7845 46.1542 98.4636 46.3651 98.1945 46.6319C97.9254 46.8987 97.7134 47.2159 97.5713 47.5648C97.4292 47.9137 97.3597 48.2871 97.3671 48.6628C97.3671 50.4262 98.7799 51.5006 100.252 51.5006C101.38 51.5006 102.128 50.9283 102.662 50.2276V50.9415C102.662 52.3546 101.784 53.0904 100.43 53.0904C99.5784 53.0928 98.7491 52.8224 98.0674 52.3201L97.6519 53.0196C98.471 53.5771 99.4457 53.8709 100.442 53.8605C102.33 53.8605 103.565 52.8671 103.565 50.9174ZM102.686 48.6519C102.686 49.8898 101.593 50.7072 100.43 50.7072C100.151 50.7142 99.8737 50.6656 99.6142 50.5645C99.3547 50.4634 99.1187 50.3118 98.9202 50.1187C98.7218 49.9257 98.565 49.6953 98.4593 49.4412C98.3535 49.1871 98.3011 48.9147 98.305 48.6402C98.305 47.3789 99.2667 46.5964 100.43 46.5964C101.594 46.5964 102.686 47.4023 102.686 48.6519ZM111.614 49.2826H116.482C116.492 49.1894 116.496 49.0958 116.494 49.0022C116.494 47.2271 115.45 45.8024 113.633 45.8024C111.935 45.8024 110.688 47.2038 110.688 48.9555C110.688 50.8358 112.066 52.1086 113.751 52.1086C114.233 52.1212 114.711 52.0257 115.149 51.8294C115.587 51.6331 115.974 51.3412 116.28 50.9758L115.71 50.4737C115.469 50.7446 115.172 50.9611 114.838 51.1083C114.504 51.2555 114.141 51.33 113.775 51.3266C112.695 51.3266 111.745 50.5906 111.614 49.2826H111.614ZM111.614 48.6169C111.733 47.4375 112.54 46.5616 113.609 46.5616C114.833 46.5616 115.473 47.5193 115.568 48.6169H111.614ZM120.044 51.9685V43.4434H119.13V51.9685H120.044ZM127.334 50.2752V50.2515C127.334 49.1654 126.313 48.8034 125.363 48.5231C124.544 48.2777 123.785 48.0562 123.785 47.484V47.4606C123.785 46.9585 124.248 46.5847 124.972 46.5847C125.621 46.6083 126.251 46.8106 126.789 47.1687L127.204 46.4913C126.546 46.0706 125.781 45.84 124.996 45.8257C123.785 45.8257 122.906 46.5148 122.906 47.5541V47.5776C122.906 48.6871 123.975 49.0139 124.937 49.2826C125.744 49.5045 126.468 49.738 126.468 50.3454V50.3688C126.468 50.9527 125.934 51.3265 125.198 51.3265C124.424 51.3021 123.678 51.0319 123.073 50.5562L122.61 51.1981C123.335 51.7588 124.227 52.0705 125.15 52.0853C126.372 52.0853 127.334 51.4197 127.334 50.2752ZM130.528 49.2826H135.396C135.405 49.1894 135.409 49.0958 135.408 49.0022C135.408 47.2271 134.364 45.8024 132.546 45.8024C130.848 45.8024 129.602 47.2038 129.602 48.9555C129.602 50.8358 130.979 52.1086 132.665 52.1086C133.146 52.1212 133.624 52.0257 134.062 51.8294C134.5 51.6331 134.887 51.3412 135.194 50.9758L134.624 50.4737C134.383 50.7446 134.085 50.9611 133.751 51.1083C133.417 51.2555 133.055 51.33 132.689 51.3266C131.608 51.3266 130.658 50.5906 130.528 49.2826ZM130.528 48.6169C130.647 47.4375 131.454 46.5616 132.522 46.5616C133.746 46.5616 134.387 47.5193 134.482 48.6169H130.528ZM138.958 47.7061L138.898 47.7645L139.076 49.6565H139.682L139.801 48.3952C141.155 48.2084 142.27 47.4843 142.27 46.0128C142.27 44.6698 141.213 43.6889 139.611 43.6889C138.341 43.6889 137.498 44.2377 136.821 45.0436L137.427 45.6158C138.032 44.9267 138.709 44.518 139.588 44.518C140.656 44.518 141.321 45.1954 141.321 46.048C141.32 47.0403 140.501 47.671 138.957 47.7059L138.958 47.7061ZM139.92 51.9685V50.7424H138.827V51.9685H139.92Z'
        fill='#5E5D5D'
      />
      <path
        d='M45.7139 17.4727H51.9597V25.2572L57.4356 17.4727H64.0237L57.6067 26.1408L65.2636 35.6929H57.9058L51.9594 27.7818V35.6929H45.7139V17.4727Z'
        fill='#2E2E2D'
      />
      <path
        d='M76.2595 17.4727H89.949V21.7646H82.5063V24.2472H88.4098V28.5392H82.5063V31.401H89.9498V35.6929H76.2595V17.4727Z'
        fill='#2E2E2D'
      />
      <path
        d='M102.785 17.4727H116.475V21.7646H109.031V24.2472H114.934V28.5392H109.031V31.401H116.475V35.6929H102.785L102.785 17.4727Z'
        fill='#2E2E2D'
      />
      <path
        d='M127.856 33.5902L129.225 29.3822C130.765 30.5178 132.861 31.7804 135.171 31.7804C136.668 31.7804 137.439 31.4434 137.439 30.4763C137.439 29.6344 136.498 29.3398 134.273 28.8351C129.695 27.8242 128.326 25.6373 128.326 22.8597C128.326 19.157 131.236 17.0527 135.557 17.0527C137.891 17.0531 140.177 17.7101 142.144 18.9463L140.904 22.9019C139.406 22.0602 137.397 21.3453 135.471 21.3453C134.444 21.3453 133.888 21.6823 133.888 22.2709C133.888 22.9019 134.444 23.2389 136.156 23.6174C141.076 24.7115 143.001 26.4783 143.001 29.8868C143.001 34.5575 139.236 36.0723 135.172 36.0723C132.518 36.0813 129.94 35.2064 127.856 33.5902Z'
        fill='#2E2E2D'
      />
      <path
        d='M6.8031 13.4V6.68613L7.39433 5.81445H13.6734V13.4H6.8031Z'
        fill='#BBB9B9'
      />
      <path
        d='M23.4268 13.4V5.81445H29.7054L30.2966 6.68613V13.4H23.4268Z'
        fill='#A1A1A1'
      />
      <path
        d='M6.8031 6.68654L10.3499 1.4536C10.4714 1.27447 10.6359 1.1276 10.829 1.02599C11.022 0.924377 11.2375 0.871174 11.4565 0.871094H25.6431C25.8621 0.871117 26.0776 0.924294 26.2707 1.02591C26.4637 1.12752 26.6283 1.27443 26.7497 1.4536L30.2963 6.68654H6.8031Z'
        fill='#A1A1A1'
      />
      <path
        d='M25.6434 0.871094H18.55V6.68654H30.2964L26.7498 1.4536C26.6283 1.27451 26.4638 1.12765 26.2708 1.02604C26.0778 0.924434 25.8623 0.871214 25.6434 0.871094Z'
        fill='#8B8A88'
      />
      <path
        d='M1.87289 13.4004H14.1709C14.3181 13.4003 14.462 13.4433 14.5845 13.5237C14.7069 13.6042 14.8024 13.7185 14.8587 13.8523C14.915 13.9861 14.9298 14.1334 14.901 14.2754C14.8723 14.4175 14.8013 14.5479 14.6972 14.6503L0 29.1061L0.00913603 15.2318C0.00965486 14.746 0.206238 14.2802 0.555699 13.9367C0.905161 13.5933 1.37892 13.4004 1.87289 13.4004Z'
        fill='#FFAC00'
      />
      <path
        d='M0.468876 35.9946L23.4396 13.4004H34.7099C35.078 13.4004 35.4378 13.5077 35.7438 13.7089C36.0498 13.91 36.2884 14.1959 36.4292 14.5304C36.5701 14.8649 36.6069 15.2329 36.5351 15.588C36.4633 15.9431 36.2861 16.2692 36.0258 16.5252L0 51.9614L0.0326296 37.0277C0.0334507 36.6402 0.190306 36.2687 0.468876 35.9946Z'
        fill='#FFAC00'
      />
      <path
        d='M35.235 51.9608H23.9531C23.7557 51.9608 23.5664 51.8836 23.4268 51.7464L11.8224 40.3321L19.8626 32.4238L36.5503 48.835C36.8109 49.0909 36.9884 49.4171 37.0604 49.7723C37.1324 50.1274 37.0957 50.4957 36.9549 50.8303C36.8141 51.165 36.5755 51.451 36.2693 51.6522C35.9632 51.8535 35.6032 51.9608 35.235 51.9608Z'
        fill='#FFAC00'
      />
      <path
        d='M13.4604 51.9623H0L8.52999 43.5723L14.5136 49.463C14.7217 49.6678 14.8634 49.9287 14.9207 50.2128C14.9781 50.4968 14.9485 50.7912 14.8358 51.0587C14.7231 51.3262 14.5322 51.5548 14.2874 51.7157C14.0426 51.8765 13.7548 51.9623 13.4604 51.9623Z'
        fill='#FFAC00'
      />
      <g>
        <path
          d='M19.8626 32.4238L24.5887 37.0725L0 51.9616L19.8626 32.4238Z'
          fill='#D1D1D1'
        />
      </g>
    </g>
    <defs>
      <clipPath id='clip0'>
        <rect
          width='143'
          height='53'
          fill='white'
          transform='translate(0 0.871094)'
        />
      </clipPath>
    </defs>
  </svg>
)

export const sliderSettings = {
  speed: 500,
  slidesToShow: 6,
  autoplay: true,
  autoplayspeed: 2500,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,
  nextArrow: <img src={arrowRight} alt='next Arrow' />,
  prevArrow: <img src={arrowLeft} alt='Prev Arrow' />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        arrows: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
  ],
}
