import s from './EmptyData.module.css'
const EmptyData = () => {
  return (
      <div className={s.warn}>
          <p>No movies by typed title. Please, check your query</p>
    </div>
  )
}

export default EmptyData