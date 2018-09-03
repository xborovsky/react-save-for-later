package cz.marek_b.save_for_later_backend.dao;

public interface BaseDao<T> {

    T findById(long id);

}
