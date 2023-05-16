/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Healthcheck from './Healthcheck';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The HealthcheckResponse model module.
 * @module model/HealthcheckResponse
 * @version 4.0.0
 */
class HealthcheckResponse {
    /**
     * Constructs a new <code>HealthcheckResponse</code>.
     * @alias module:model/HealthcheckResponse
     * @implements module:model/Healthcheck
     * @implements module:model/ServiceIdAndVersion
     * @implements module:model/Timestamps
     */
    constructor() { 
        Healthcheck.initialize(this);ServiceIdAndVersion.initialize(this);Timestamps.initialize(this);
        HealthcheckResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HealthcheckResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HealthcheckResponse} obj Optional instance to populate.
     * @return {module:model/HealthcheckResponse} The populated <code>HealthcheckResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HealthcheckResponse();
            Healthcheck.constructFromObject(data, obj);
            ServiceIdAndVersion.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * How often to run the health check in milliseconds.
 * @member {Number} check_interval
 */
HealthcheckResponse.prototype['check_interval'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
HealthcheckResponse.prototype['comment'] = undefined;

/**
 * The status code expected from the host.
 * @member {Number} expected_response
 */
HealthcheckResponse.prototype['expected_response'] = undefined;

/**
 * Array of custom headers that will be added to the health check probes.
 * @member {Array.<String>} headers
 */
HealthcheckResponse.prototype['headers'] = undefined;

/**
 * Which host to check.
 * @member {String} host
 */
HealthcheckResponse.prototype['host'] = undefined;

/**
 * Whether to use version 1.0 or 1.1 HTTP.
 * @member {String} http_version
 */
HealthcheckResponse.prototype['http_version'] = undefined;

/**
 * When loading a config, the initial number of probes to be seen as OK.
 * @member {Number} initial
 */
HealthcheckResponse.prototype['initial'] = undefined;

/**
 * Which HTTP method to use.
 * @member {String} method
 */
HealthcheckResponse.prototype['method'] = undefined;

/**
 * The name of the health check.
 * @member {String} name
 */
HealthcheckResponse.prototype['name'] = undefined;

/**
 * The path to check.
 * @member {String} path
 */
HealthcheckResponse.prototype['path'] = undefined;

/**
 * How many health checks must succeed to be considered healthy.
 * @member {Number} threshold
 */
HealthcheckResponse.prototype['threshold'] = undefined;

/**
 * Timeout in milliseconds.
 * @member {Number} timeout
 */
HealthcheckResponse.prototype['timeout'] = undefined;

/**
 * The number of most recent health check queries to keep for this health check.
 * @member {Number} window
 */
HealthcheckResponse.prototype['window'] = undefined;

/**
 * @member {String} service_id
 */
HealthcheckResponse.prototype['service_id'] = undefined;

/**
 * @member {Number} version
 */
HealthcheckResponse.prototype['version'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
HealthcheckResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
HealthcheckResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
HealthcheckResponse.prototype['updated_at'] = undefined;


// Implement Healthcheck interface:
/**
 * How often to run the health check in milliseconds.
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
// Implement ServiceIdAndVersion interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersion.prototype['service_id'] = undefined;
/**
 * @member {Number} version
 */
ServiceIdAndVersion.prototype['version'] = undefined;
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;




export default HealthcheckResponse;

