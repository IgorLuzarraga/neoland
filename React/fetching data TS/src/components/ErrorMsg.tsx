type props = {
    error: string
}

const ErrorMsg = ({ error }: props) =>
    <div className="alert alert-danger text-center">
        {error}
    </div>

export default ErrorMsg