/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */ 
/* eslint-disable import/no-unresolved */

import { client } from "../../.tina/__generated__/client";
import { Layout } from "../../components/layout";
import { ServiceLada } from "../../components/serviceLada/serviceLada";

import { useTina } from "tinacms/dist/react";
import React from "react";

// Use the props returned by get static props
export default function ServiceLadaPage(
	props: AsyncReturnType<typeof getStaticProps>["props"]
) {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});

	if (data) {
		return (
			<Layout rawData={data} data={data.global as any}>
				<ServiceLada {...data} />
			</Layout>
		);
	}
	return (
		<Layout>
			<div>No data</div>;
		</Layout>
	);
}

export const getStaticProps = async ({ params }) => {
	const tinaProps = await client.queries.serviceLadaQuery({
		relativePath: `${params.filename}.md`,
	});
	return {
		props: {
			...tinaProps,
		},
	};
};

/**
 * To build the blog post pages we just iterate through the list of
 * posts and provide their "filename" as part of the URL path
 *
 * So a blog post at "content/posts/hello.md" would
 * be viewable at http://localhost:3000/posts/hello
 */
export const getStaticPaths = async () => {
	const serviceListData = await client.queries.serviceLadaConnection();
	return {
		paths: serviceListData.data.serviceLadaConnection.edges.map((service) => ({
			params: { filename: service.node._sys.filename },
		})),
		fallback: "blocking",
	};
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
