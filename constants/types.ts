export type item = {
    href: string, 
    data: [
        {
            center: string,
            title: string,
            photographer: string,
            keywords: string[],
            location: string,
            nasa_id: string,
            date_created: string,
            description: string,
        }
    ],
    links: [
        {
            href: string,
            rel: string,
            render: string
        }
    ]
}