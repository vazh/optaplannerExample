package io.github.vazh.app.repository;

import io.github.vazh.app.domain.Skill;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the Skill entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
    @Query("select distinct skill from Skill skill left join fetch skill.employees")
    List<Skill> findAllWithEagerRelationships();

    @Query("select skill from Skill skill left join fetch skill.employees where skill.id =:id")
    Skill findOneWithEagerRelationships(@Param("id") Long id);

}
