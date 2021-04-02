import requests
import aiohttp


PORT = 8000
INSTANCE_ID = 'http://169.254.169.254/latest/meta-data/instance-id'


def main():
    from aiohttp import web

    async def handle(request):
        resp = requests.get(INSTANCE_ID).text
        return web.Response(text=resp)

    async def shutdown(request):
        exit(0)
    app = web.Application()
    app.add_routes([web.get('/', handle),
                    web.get('/shutdown', shutdown)])

    if __name__ == '__main__':
        web.run_app(app)


if __name__ == '__main__':
    main()
