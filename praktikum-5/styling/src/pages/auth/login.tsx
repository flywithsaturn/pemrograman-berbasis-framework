import Link from "next/link";
import { useRouter } from "next/router";

const HalamanLogin = () => {
    const { push } = useRouter();
    
    const handleLogin = () => {
        // Simulasi logic login
        console.log("Processing login...");
        
        // Navigasi imperatif ke halaman Produk setelah login berhasil
        push('/produk');
    };

    return(
        <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
            <h1>Halaman Login</h1>
            
            <div style={{ marginBottom: "20px" }}>
                {/* Navigasi Imperatif Login ke Product */}
                <button 
                    onClick={handleLogin}
                    style={{ 
                        padding: "10px 20px", 
                        backgroundColor: "#0070f3", 
                        color: "white", 
                        border: "none", 
                        borderRadius: "5px",
                        cursor: "pointer",
                        width: "100%"
                    }}
                >
                    Login (Navigasi ke Product)
                </button>
            </div>
            
            {/* Navigasi Login ke Halaman Register */}
            <p style={{ textAlign: "center" }}>
                Belum punya akun? {" "}
                <Link href="/auth/register" style={{ color: "#0070f3", textDecoration: "underline" }}>
                    Register di sini
                </Link>
            </p>
        </div>
    );
};

export default HalamanLogin;