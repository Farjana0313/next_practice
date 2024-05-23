import Button from '@/app/components/Button';
import SortProducts from '@/app/components/SortProducts';
import { Suspense } from 'react';

export default function Settings() {
    return (
        <div className="p-4">
            <h1 className="text-2xl">Settings page</h1>
            <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quis commodi minus, itaque repudiandae sint expedita fuga deleniti accusantium laboriosam officia debitis aut molestias magni nobis impedit neque doloribus quam accusamus iure aspernatur labore iusto ea dolorem. At obcaecati fugit libero! Quidem suscipit repellendus ea voluptatem odio iusto magni non.</p>

            <Button>Go to Analytics page</Button>
            <br />
            <br />
            <Suspense>
                <SortProducts />
            </Suspense>
        </div>
    );
}
