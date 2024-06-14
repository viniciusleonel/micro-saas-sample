import { getUrl } from "./lib/get-url";
import { NextRequest, NextResponse } from "next/server";

// Define a função middleware que será usada para gerenciar redirecionamentos com base no estado de autenticação
export function middleware(request: NextRequest) {
    // Obtém o token de autenticação dos cookies da requisição
    const token = request.cookies.get('authjs.session-token');
    // Obtém o caminho atual da URL acessada
    const pathname = request.nextUrl.pathname;
    
    // Se o usuário estiver tentando acessar a página de autenticação e já possuir um token, redireciona para a página do app
    if(pathname === '/auth' && token) {
        return NextResponse.redirect(new URL(getUrl('/app')));
    }

    // Se o usuário estiver tentando acessar qualquer página dentro de '/app' sem um token, redireciona para a página de autenticação
    if(pathname.includes('/app') && !token) {
        return NextResponse.redirect(new URL(getUrl('/auth')));
    }

}

// Configuração do middleware para especificar quais caminhos ele deve interceptar
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}