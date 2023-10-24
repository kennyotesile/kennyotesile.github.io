export default function Section({ className, children }) {
    return (
        <section className={`py-10 px-5 md:p-20 2xl:px-80 ${className}`}>
            {children}
        </section>
    );
}