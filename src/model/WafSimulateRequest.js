/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WafSimulateRequest model module.
 * @module model/WafSimulateRequest
 * @version 16.0.0
 */
class WafSimulateRequest {
    /**
     * Constructs a new <code>WafSimulateRequest</code>.
     * Request body for simulating a WAF request. The total request body must not exceed 200 KB.
     * @alias module:model/WafSimulateRequest
     * @param request {String} The raw HTTP request in wire format to simulate through the WAF. Must include the request line, headers, and optionally a body, separated by CRLF sequences.
     */
    constructor(request) { 
        
        WafSimulateRequest.initialize(this, request);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, request) { 
        obj['request'] = request;
    }

    /**
     * Constructs a <code>WafSimulateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafSimulateRequest} obj Optional instance to populate.
     * @return {module:model/WafSimulateRequest} The populated <code>WafSimulateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafSimulateRequest();

            if (data.hasOwnProperty('request')) {
                obj['request'] = ApiClient.convertToType(data['request'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The raw HTTP request in wire format to simulate through the WAF. Must include the request line, headers, and optionally a body, separated by CRLF sequences.
 * @member {String} request
 */
WafSimulateRequest.prototype['request'] = undefined;

/**
 * The raw HTTP response in wire format. The WAF engine inspects response headers during its PostRequest phase and may generate signals from them. When omitted, a default response of `HTTP/1.1 200 OK\\r\\n\\r\\n` is used.
 * @member {String} response
 */
WafSimulateRequest.prototype['response'] = undefined;






export default WafSimulateRequest;

