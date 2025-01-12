interface RootLayoutProps {
    children: React.ReactNode;
    params: {
        locale: string;
    };
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return children;
}