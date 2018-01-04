package io.github.vazh.app.repository.search;

import io.github.vazh.app.domain.Skill;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Skill entity.
 */
public interface SkillSearchRepository extends ElasticsearchRepository<Skill, Long> {
}
