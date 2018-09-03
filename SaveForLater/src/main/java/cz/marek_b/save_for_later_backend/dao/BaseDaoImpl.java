package cz.marek_b.save_for_later_backend.dao;

import java.lang.reflect.ParameterizedType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class BaseDaoImpl<T> implements BaseDao<T> {

    @PersistenceContext
    protected EntityManager em;

    private final Class<T> clazz;

    public BaseDaoImpl() {
        this.clazz = (Class<T>) ((ParameterizedType) getClass()
            .getGenericSuperclass()).getActualTypeArguments()[0];
    }

    @Override
    public T findById(long id) {
        return (T) em.find(this.clazz, id);
    }

}
