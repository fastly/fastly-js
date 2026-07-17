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
 * The WafSimulateSignal model module.
 * @module model/WafSimulateSignal
 * @version 16.0.0
 */
class WafSimulateSignal {
    /**
     * Constructs a new <code>WafSimulateSignal</code>.
     * A signal detected during WAF simulation. The &#x60;type&#x60;, &#x60;detector&#x60;, &#x60;detector_scope&#x60;, and &#x60;redaction&#x60; fields are always present. The &#x60;location&#x60;, &#x60;name&#x60;, and &#x60;value&#x60; fields are present only when applicable to the signal category.
     * @alias module:model/WafSimulateSignal
     * @param type {String} The type of signal detected (e.g., `SQLI`, `XSS`, `CMDEXE`, `TRAVERSAL`, `BACKDOOR`, `LOG4J-JNDI`, `BLOCKED`).
     * @param detector {String} The detector engine that identified the signal (e.g., `SQLI`, `LIBINJECTIONV5`, `LIBINJECTIONJS`, or a rule ID).
     * @param detector_scope {module:model/WafSimulateSignal.DetectorScopeEnum} The scope of the detector that identified the signal. Derived from the signal type and detection type at simulation time. `system` — built-in WAF rule (e.g., `SQLI`, `XSS`). `workspace` — workspace-level custom rule or signal (e.g., `site.*` prefix). `account` — account-level custom signal (e.g., `corp.*` prefix). `unknown` — scope could not be determined (e.g., tags fetch failed or unrecognized type).
     * @param redaction {module:model/WafSimulateSignal.RedactionEnum} The redaction level applied to the detected value. Clients should handle unexpected string values gracefully, as new redaction types may be added.
     */
    constructor(type, detector, detector_scope, redaction) { 
        
        WafSimulateSignal.initialize(this, type, detector, detector_scope, redaction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, detector, detector_scope, redaction) { 
        obj['type'] = type;
        obj['detector'] = detector;
        obj['detector_scope'] = detector_scope;
        obj['redaction'] = redaction;
    }

    /**
     * Constructs a <code>WafSimulateSignal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafSimulateSignal} obj Optional instance to populate.
     * @return {module:model/WafSimulateSignal} The populated <code>WafSimulateSignal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafSimulateSignal();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('detector')) {
                obj['detector'] = ApiClient.convertToType(data['detector'], 'String');
            }
            if (data.hasOwnProperty('detector_scope')) {
                obj['detector_scope'] = ApiClient.convertToType(data['detector_scope'], 'String');
            }
            if (data.hasOwnProperty('redaction')) {
                obj['redaction'] = ApiClient.convertToType(data['redaction'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The type of signal detected (e.g., `SQLI`, `XSS`, `CMDEXE`, `TRAVERSAL`, `BACKDOOR`, `LOG4J-JNDI`, `BLOCKED`).
 * @member {String} type
 */
WafSimulateSignal.prototype['type'] = undefined;

/**
 * The detector engine that identified the signal (e.g., `SQLI`, `LIBINJECTIONV5`, `LIBINJECTIONJS`, or a rule ID).
 * @member {String} detector
 */
WafSimulateSignal.prototype['detector'] = undefined;

/**
 * The scope of the detector that identified the signal. Derived from the signal type and detection type at simulation time. `system` — built-in WAF rule (e.g., `SQLI`, `XSS`). `workspace` — workspace-level custom rule or signal (e.g., `site.*` prefix). `account` — account-level custom signal (e.g., `corp.*` prefix). `unknown` — scope could not be determined (e.g., tags fetch failed or unrecognized type).
 * @member {module:model/WafSimulateSignal.DetectorScopeEnum} detector_scope
 */
WafSimulateSignal.prototype['detector_scope'] = undefined;

/**
 * The redaction level applied to the detected value. Clients should handle unexpected string values gracefully, as new redaction types may be added.
 * @member {module:model/WafSimulateSignal.RedactionEnum} redaction
 */
WafSimulateSignal.prototype['redaction'] = undefined;

/**
 * Where in the request the signal was detected (e.g., `QUERYSTRING`, `POSTBODY`, `HEADER`, `HEADEROUT`, `POSTARG`). Present for detection signals; absent for custom and action signals.
 * @member {String} location
 */
WafSimulateSignal.prototype['location'] = undefined;

/**
 * The parameter or header name that triggered detection. Present when the WAF engine identifies a specific parameter or header.
 * @member {String} name
 */
WafSimulateSignal.prototype['name'] = undefined;

/**
 * The matched payload value that triggered signal detection. For detection signals, contains the matched content. For `BLOCKED` signals, carries the WAF response code as a string. Absent for custom signals.
 * @member {String} value
 */
WafSimulateSignal.prototype['value'] = undefined;





/**
 * Allowed values for the <code>detector_scope</code> property.
 * @enum {String}
 * @readonly
 */
WafSimulateSignal['DetectorScopeEnum'] = {

    /**
     * value: "system"
     * @const
     */
    "system": "system",

    /**
     * value: "workspace"
     * @const
     */
    "workspace": "workspace",

    /**
     * value: "account"
     * @const
     */
    "account": "account",

    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown"
};


/**
 * Allowed values for the <code>redaction</code> property.
 * @enum {String}
 * @readonly
 */
WafSimulateSignal['RedactionEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "param"
     * @const
     */
    "param": "param",

    /**
     * value: "credit_card"
     * @const
     */
    "credit_card": "credit_card",

    /**
     * value: "ssn"
     * @const
     */
    "ssn": "ssn",

    /**
     * value: "guid"
     * @const
     */
    "guid": "guid",

    /**
     * value: "iban"
     * @const
     */
    "iban": "iban",

    /**
     * value: "request_header"
     * @const
     */
    "request_header": "request_header",

    /**
     * value: "response_header"
     * @const
     */
    "response_header": "response_header",

    /**
     * value: "custom_param"
     * @const
     */
    "custom_param": "custom_param",

    /**
     * value: "custom_request_header"
     * @const
     */
    "custom_request_header": "custom_request_header",

    /**
     * value: "custom_response_header"
     * @const
     */
    "custom_response_header": "custom_response_header",

    /**
     * value: "jsession_id"
     * @const
     */
    "jsession_id": "jsession_id",

    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown"
};



export default WafSimulateSignal;

