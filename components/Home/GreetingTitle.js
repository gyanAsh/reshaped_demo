import { Fragment } from "react";
import style from '../../styles/Home.module.css'
import { Text } from "reshaped";

const GreetingTitle = () => {
  return (
      <Fragment>
          <Text className={style.mainTitle} variant="display-3">Good Evening&#44; <span>Gyan Ashish Ekka&#33;</span></Text>
          <Text variant="featured-2">Welcome back&#33; All the best because &#35;PaperPhodnaHai</Text>
      </Fragment>
  )
}

export default GreetingTitle