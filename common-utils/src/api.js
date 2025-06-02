const API_URL = 'http://apps.insn.gob.pe:4010'

export const apiGetAtenciones = async ({
    page = 1,
    limit = 10,
    estado = ''
}) => {
    let url = `${API_URL}/api/atenciones?page=${page}&limit=${limit}`;
    if (estado) {
        url += `&estado=${estado}`;
    }

    const token = localStorage.getItem('token');

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    return response.json();
}