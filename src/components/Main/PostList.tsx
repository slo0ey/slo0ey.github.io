import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import PostItem from './PostItem';
import { PostListItemType } from 'types/PostItem.types';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

type PostListProps = {
	selectedCategory: string;
	posts: PostListItemType[];
};

const PostListWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;
	width: 768px;
	margin: 0 auto;
	padding: 50px 0px;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		width: 100%;
		padding: 50px;
	}
`;

const PostList: React.FC<PostListProps> = function ({
	selectedCategory,
	posts,
}) {
	const { containerRef, postList } = useInfiniteScroll(selectedCategory, posts);
	console.log(postList.length);
	return (
		<PostListWrapper ref={containerRef}>
			{postList.map(
				({
					node: {
						id,
						fields: { slug },
						frontmatter,
					},
				}: PostListItemType) => (
					<PostItem {...frontmatter} link={slug} key={id} />
				),
			)}
		</PostListWrapper>
	);
};

export default PostList;
