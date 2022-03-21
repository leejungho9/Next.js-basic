import { useRouter } from "next/router"

export default function UsernameSetting() {
    const router = useRouter();

    const {username} = router.query;
    return (
        <div>
            <h1>{username} / Settings</h1>
        </div>
    )
}