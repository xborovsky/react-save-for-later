package cz.marek_b.save_for_later_backend.util;

public final class SqlHelper {

    private SqlHelper() {}

    public static int calculatePageNum(int offset, int defaultPageSize) {
        return offset == 0 ? 0 : offset / defaultPageSize;
    }
}
