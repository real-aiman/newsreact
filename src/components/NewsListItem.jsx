export default function NewsListItem({item}) {
    return (
        <>
         <div className="news_item">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        </>
    )
}