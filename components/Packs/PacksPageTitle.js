import { Fragment } from "react";
import style from '../../styles/Packs.module.css'
import { Text } from "reshaped";

const PacksPageTitle = () => {
  return (
      <Fragment>
          <Text variant="featured-3">Overview</Text>
          <Text className={style.mainTitle} variant="display-3">Test Series Packs</Text>
      </Fragment>
  )
}

export default PacksPageTitle