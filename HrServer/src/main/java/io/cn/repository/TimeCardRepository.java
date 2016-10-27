package io.cn.repository;

/**
 * Created by nazhirjackson on 10/26/16.
 */

import io.cn.domain.TimeCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimeCardRepository extends JpaRepository<TimeCard, Long> {
}
