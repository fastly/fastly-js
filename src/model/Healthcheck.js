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
 * The Healthcheck model module.
 * @module model/Healthcheck
 * @version 15.0.0-beta.1
 */
class Healthcheck {
    /**
     * Constructs a new <code>Healthcheck</code>.
     * @alias module:model/Healthcheck
     */
    constructor() { 
        
        Healthcheck.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Healthcheck</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Healthcheck} obj Optional instance to populate.
     * @return {module:model/Healthcheck} The populated <code>Healthcheck</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Healthcheck();

            if (data.hasOwnProperty('check_interval')) {
                obj['check_interval'] = ApiClient.convertToType(data['check_interval'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('expected_response')) {
                obj['expected_response'] = ApiClient.convertToType(data['expected_response'], 'Number');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], ['String']);
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('http_version')) {
                obj['http_version'] = ApiClient.convertToType(data['http_version'], 'String');
            }
            if (data.hasOwnProperty('initial')) {
                obj['initial'] = ApiClient.convertToType(data['initial'], 'Number');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('threshold')) {
                obj['threshold'] = ApiClient.convertToType(data['threshold'], 'Number');
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
            }
            if (data.hasOwnProperty('window')) {
                obj['window'] = ApiClient.convertToType(data['window'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * How often to run the health check in milliseconds. Minimum 1 second, maximum 1 hour.
 * @member {Number} check_interval
 */
Healthcheck.prototype['check_interval'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
Healthcheck.prototype['comment'] = undefined;

/**
 * The status code expected from the host.
 * @member {Number} expected_response
 */
Healthcheck.prototype['expected_response'] = undefined;

/**
 * Array of custom headers that will be added to the health check probes.
 * @member {Array.<String>} headers
 */
Healthcheck.prototype['headers'] = undefined;

/**
 * Which host to check.
 * @member {String} host
 */
Healthcheck.prototype['host'] = undefined;

/**
 * Whether to use version 1.0 or 1.1 HTTP.
 * @member {String} http_version
 */
Healthcheck.prototype['http_version'] = undefined;

/**
 * When loading a config, the initial number of probes to be seen as OK.
 * @member {Number} initial
 */
Healthcheck.prototype['initial'] = undefined;

/**
 * Which HTTP method to use.
 * @member {String} method
 */
Healthcheck.prototype['method'] = undefined;

/**
 * The name of the health check.
 * @member {String} name
 */
Healthcheck.prototype['name'] = undefined;

/**
 * The path to check.
 * @member {String} path
 */
Healthcheck.prototype['path'] = undefined;

/**
 * How many health checks must succeed to be considered healthy.
 * @member {Number} threshold
 */
Healthcheck.prototype['threshold'] = undefined;

/**
 * Timeout in milliseconds.
 * @member {Number} timeout
 */
Healthcheck.prototype['timeout'] = undefined;

/**
 * The number of most recent health check queries to keep for this health check.
 * @member {Number} window
 */
Healthcheck.prototype['window'] = undefined;






export default Healthcheck;

