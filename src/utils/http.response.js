const httpStatus={
    OK:200,
    NOT_FOUND:404,
    UNAUTHORIZED:401,
    FORBIDDEN:403,
    INTERNAL_SERVER_ERROR:500
}

export class HttpResponse{
    OK(res,data){
        return res.status(httpStatus.OK).json({
            status:httpStatus.OK,
            message:"success",
            data:data
        })
    }
    NOT_FOUND (res,data) {
        return 	res.status(httpStatus.NOT_FOUND).json({
            status:httpStatus.NOT_FOUND,
            message:"Not found",
            error:data
        })
    }
    UNAUTHORIZED(res,data){
        return res.status(httpStatus.UNAUTHORIZED).json({
            status:httpStatus.UNAUTHORIZED,
            message:"Unauthorized",
            error:data
        })
    }
    FORBIDDEN(res,data){
        return res.status(httpStatus.FORBIDDEN).json({
            status:httpStatus.FORBIDDEN,
            message:"Forbidden",
            error:data
        })
    }
    INTERNAL_SERVER_ERROR(res,error=null){
        return   res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status:httpStatus.INTERNAL_SERVER_ERROR,
            message:'Internal server Error',
            error:error||'Server Error'
        })
    }
}