import { Suspense } from "react";
import Posts from "../components/Posts";

export default function Heavy() {
    return (
        <div className="p-4">
            <h1>Heavy page</h1>
            <Suspense fallback={<h1>Loading Post....</h1>}>
                <Posts />
            </Suspense>
        </div>
    )
}
