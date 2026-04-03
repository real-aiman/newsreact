import NewsListItem from "./NewsListItem"

export default function NewsList({ news }) {
    const newsHandler =news.map(item=>( 
        //    <newsItems />
        <NewsListItem key={item.id} item={item} />
    ))
    return (
        <>
        {newsHandler}

        
        </>
    )
}