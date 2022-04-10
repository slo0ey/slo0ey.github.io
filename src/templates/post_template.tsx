import Template from 'components/Common/Template';
import PostContent from 'components/Post/PostContent';
import PostHead from 'components/Post/PostHead';
import { graphql } from 'gatsby';
import React from 'react';
import { PostPageItemType } from 'types/PostItem.types';

type PostTemplateProps = {
	data: {
		allMarkdownRemark: {
			edges: PostPageItemType[];
		};
	};
};

const PostTemplate: React.FC<PostTemplateProps> = function ({
	data: {
		allMarkdownRemark: { edges },
	},
}) {
	const {
		node: {
			html,
			frontmatter: {
				title,
				summary,
				date,
				categories,
				thumbnail: {
					childImageSharp: { gatsbyImageData },
				},
			},
		},
	} = edges[0];
	return (
		<Template>
			<PostHead
				title={title}
				date={date}
				categories={categories}
				thumbnail={gatsbyImageData}
			/>
			<PostContent html={html} />
		</Template>
	);
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
	query queryMarkdownDataBySlug($slug: String) {
		allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
			edges {
				node {
					html
					frontmatter {
						title
						summary
						date(formatString: "YYYY.MM.DD.")
						categories
						thumbnail {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
				}
			}
		}
	}
`;
