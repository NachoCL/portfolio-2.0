import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { DATA_EN } from '@/lib/data.en';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
    return DATA_EN.projects.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const project = DATA_EN.projects.find((project) => project.slug === slug);

    return {
        title: `${project?.title} - ${project?.techStack
            .slice(0, 3)
            .join(', ')}`,
        description: project?.description,
    } as Metadata;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    // Check if project exists in default language (or any mechanism we prefer)
    // We can just rely on the fact that if it's in generateStaticParams, it exists.
    const projectExists = DATA_EN.projects.some((p) => p.slug === slug);

    if (!projectExists) {
        return notFound();
    }

    return <ProjectDetails slug={slug} />;
};

export default Page;
