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
import WafSimulateSignal from './WafSimulateSignal';

/**
 * The WafSimulateResponse model module.
 * @module model/WafSimulateResponse
 * @version 16.0.0
 */
class WafSimulateResponse {
    /**
     * Constructs a new <code>WafSimulateResponse</code>.
     * Response from the WAF simulation containing the WAF response code and detected signals.
     * @alias module:model/WafSimulateResponse
     * @param waf_response {Number} The HTTP status code the WAF would return for the simulated request (e.g., `200` for allowed, `406` for blocked).
     * @param signals {Array.<module:model/WafSimulateSignal>} List of signals detected by the WAF during simulation. Empty array when no signals are detected.
     */
    constructor(waf_response, signals) { 
        
        WafSimulateResponse.initialize(this, waf_response, signals);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, waf_response, signals) { 
        obj['waf_response'] = waf_response;
        obj['signals'] = signals;
    }

    /**
     * Constructs a <code>WafSimulateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafSimulateResponse} obj Optional instance to populate.
     * @return {module:model/WafSimulateResponse} The populated <code>WafSimulateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafSimulateResponse();

            if (data.hasOwnProperty('waf_response')) {
                obj['waf_response'] = ApiClient.convertToType(data['waf_response'], 'Number');
            }
            if (data.hasOwnProperty('signals')) {
                obj['signals'] = ApiClient.convertToType(data['signals'], [WafSimulateSignal]);
            }
        }
        return obj;
    }


}

/**
 * The HTTP status code the WAF would return for the simulated request (e.g., `200` for allowed, `406` for blocked).
 * @member {Number} waf_response
 */
WafSimulateResponse.prototype['waf_response'] = undefined;

/**
 * List of signals detected by the WAF during simulation. Empty array when no signals are detected.
 * @member {Array.<module:model/WafSimulateSignal>} signals
 */
WafSimulateResponse.prototype['signals'] = undefined;






export default WafSimulateResponse;

