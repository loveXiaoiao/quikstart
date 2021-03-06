package org.weichart.quickstart.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.weichart.quickstart.entity.Comment;

public interface CommentDao extends JpaSpecificationExecutor<Comment>,
		PagingAndSortingRepository<Comment, Long> {

}
