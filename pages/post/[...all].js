import { useRouter } from "next/router"

export default function PostAll() {

    const router = useRouter();
    const {all} = router.query;
    return ( 
        <div>
            <h1>Post / {all.join("/")}</h1>
        </div>
    )
}