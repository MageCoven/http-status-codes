"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusClasses = void 0;
// Generated file. Do not edit
var status_codes_1 = require("./status-codes");
var StatusClasses;
(function (StatusClasses) {
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2
     *
     * Union of all status codes between 100 and 199:
     * - StatusCodes.CONTINUE
     * - StatusCodes.PROCESSING
     * - StatusCodes.SWITCHING_PROTOCOLS
     */
    var Informational;
    (function (Informational) {
        /** List of all codes */
        Informational.LIST = [
            status_codes_1.StatusCodes.CONTINUE,
            status_codes_1.StatusCodes.PROCESSING,
            status_codes_1.StatusCodes.SWITCHING_PROTOCOLS
        ];
    })(Informational = StatusClasses.Informational || (StatusClasses.Informational = {}));
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3
     *
     * Union of all status codes between 200 and 299:
     * - StatusCodes.ACCEPTED
     * - StatusCodes.CREATED
     * - StatusCodes.MULTI_STATUS
     * - StatusCodes.NO_CONTENT
     * - StatusCodes.NON_AUTHORITATIVE_INFORMATION
     * - StatusCodes.OK
     * - StatusCodes.PARTIAL_CONTENT
     * - StatusCodes.RESET_CONTENT
     */
    var Successful;
    (function (Successful) {
        /** List of all codes */
        Successful.LIST = [
            status_codes_1.StatusCodes.ACCEPTED,
            status_codes_1.StatusCodes.CREATED,
            status_codes_1.StatusCodes.MULTI_STATUS,
            status_codes_1.StatusCodes.NO_CONTENT,
            status_codes_1.StatusCodes.NON_AUTHORITATIVE_INFORMATION,
            status_codes_1.StatusCodes.OK,
            status_codes_1.StatusCodes.PARTIAL_CONTENT,
            status_codes_1.StatusCodes.RESET_CONTENT
        ];
    })(Successful = StatusClasses.Successful || (StatusClasses.Successful = {}));
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4
     *
     * Union of all status codes between 300 and 399:
     * - StatusCodes.MOVED_PERMANENTLY
     * - StatusCodes.MOVED_TEMPORARILY
     * - StatusCodes.MULTIPLE_CHOICES
     * - StatusCodes.NOT_MODIFIED
     * - StatusCodes.PERMANENT_REDIRECT
     * - StatusCodes.SEE_OTHER
     * - StatusCodes.TEMPORARY_REDIRECT
     * - StatusCodes.USE_PROXY
     */
    var Redirection;
    (function (Redirection) {
        /** List of all codes */
        Redirection.LIST = [
            status_codes_1.StatusCodes.MOVED_PERMANENTLY,
            status_codes_1.StatusCodes.MOVED_TEMPORARILY,
            status_codes_1.StatusCodes.MULTIPLE_CHOICES,
            status_codes_1.StatusCodes.NOT_MODIFIED,
            status_codes_1.StatusCodes.PERMANENT_REDIRECT,
            status_codes_1.StatusCodes.SEE_OTHER,
            status_codes_1.StatusCodes.TEMPORARY_REDIRECT,
            status_codes_1.StatusCodes.USE_PROXY
        ];
    })(Redirection = StatusClasses.Redirection || (StatusClasses.Redirection = {}));
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5
     *
     * Union of all status codes between 400 and 499:
     * - StatusCodes.BAD_REQUEST
     * - StatusCodes.CONFLICT
     * - StatusCodes.EXPECTATION_FAILED
     * - StatusCodes.FAILED_DEPENDENCY
     * - StatusCodes.FORBIDDEN
     * - StatusCodes.GONE
     * - StatusCodes.IM_A_TEAPOT
     * - StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE
     * - StatusCodes.LENGTH_REQUIRED
     * - StatusCodes.LOCKED
     * - StatusCodes.METHOD_FAILURE
     * - StatusCodes.METHOD_NOT_ALLOWED
     * - StatusCodes.NOT_ACCEPTABLE
     * - StatusCodes.NOT_FOUND
     * - StatusCodes.PAYMENT_REQUIRED
     * - StatusCodes.PRECONDITION_FAILED
     * - StatusCodes.PRECONDITION_REQUIRED
     * - StatusCodes.PROXY_AUTHENTICATION_REQUIRED
     * - StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE
     * - StatusCodes.REQUEST_TIMEOUT
     * - StatusCodes.REQUEST_TOO_LONG
     * - StatusCodes.REQUEST_URI_TOO_LONG
     * - StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE
     * - StatusCodes.TOO_MANY_REQUESTS
     * - StatusCodes.UNAUTHORIZED
     * - StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS
     * - StatusCodes.UNPROCESSABLE_ENTITY
     * - StatusCodes.UNSUPPORTED_MEDIA_TYPE
     * - StatusCodes.MISDIRECTED_REQUEST
     */
    var ClientError;
    (function (ClientError) {
        /** List of all codes */
        ClientError.LIST = [
            status_codes_1.StatusCodes.BAD_REQUEST,
            status_codes_1.StatusCodes.CONFLICT,
            status_codes_1.StatusCodes.EXPECTATION_FAILED,
            status_codes_1.StatusCodes.FAILED_DEPENDENCY,
            status_codes_1.StatusCodes.FORBIDDEN,
            status_codes_1.StatusCodes.GONE,
            status_codes_1.StatusCodes.IM_A_TEAPOT,
            status_codes_1.StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE,
            status_codes_1.StatusCodes.LENGTH_REQUIRED,
            status_codes_1.StatusCodes.LOCKED,
            status_codes_1.StatusCodes.METHOD_FAILURE,
            status_codes_1.StatusCodes.METHOD_NOT_ALLOWED,
            status_codes_1.StatusCodes.NOT_ACCEPTABLE,
            status_codes_1.StatusCodes.NOT_FOUND,
            status_codes_1.StatusCodes.PAYMENT_REQUIRED,
            status_codes_1.StatusCodes.PRECONDITION_FAILED,
            status_codes_1.StatusCodes.PRECONDITION_REQUIRED,
            status_codes_1.StatusCodes.PROXY_AUTHENTICATION_REQUIRED,
            status_codes_1.StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE,
            status_codes_1.StatusCodes.REQUEST_TIMEOUT,
            status_codes_1.StatusCodes.REQUEST_TOO_LONG,
            status_codes_1.StatusCodes.REQUEST_URI_TOO_LONG,
            status_codes_1.StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE,
            status_codes_1.StatusCodes.TOO_MANY_REQUESTS,
            status_codes_1.StatusCodes.UNAUTHORIZED,
            status_codes_1.StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS,
            status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY,
            status_codes_1.StatusCodes.UNSUPPORTED_MEDIA_TYPE,
            status_codes_1.StatusCodes.MISDIRECTED_REQUEST
        ];
    })(ClientError = StatusClasses.ClientError || (StatusClasses.ClientError = {}));
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6
     *
     * Union of all status codes between 500 and 599:
     * - StatusCodes.BAD_GATEWAY
     * - StatusCodes.GATEWAY_TIMEOUT
     * - StatusCodes.HTTP_VERSION_NOT_SUPPORTED
     * - StatusCodes.INSUFFICIENT_STORAGE
     * - StatusCodes.INTERNAL_SERVER_ERROR
     * - StatusCodes.NETWORK_AUTHENTICATION_REQUIRED
     * - StatusCodes.NOT_IMPLEMENTED
     * - StatusCodes.SERVICE_UNAVAILABLE
     */
    var ServerError;
    (function (ServerError) {
        /** List of all codes */
        ServerError.LIST = [
            status_codes_1.StatusCodes.BAD_GATEWAY,
            status_codes_1.StatusCodes.GATEWAY_TIMEOUT,
            status_codes_1.StatusCodes.HTTP_VERSION_NOT_SUPPORTED,
            status_codes_1.StatusCodes.INSUFFICIENT_STORAGE,
            status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
            status_codes_1.StatusCodes.NETWORK_AUTHENTICATION_REQUIRED,
            status_codes_1.StatusCodes.NOT_IMPLEMENTED,
            status_codes_1.StatusCodes.SERVICE_UNAVAILABLE
        ];
    })(ServerError = StatusClasses.ServerError || (StatusClasses.ServerError = {}));
})(StatusClasses = exports.StatusClasses || (exports.StatusClasses = {}));
