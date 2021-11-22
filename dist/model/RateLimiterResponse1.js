"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RateLimiterResponse1 model module.
 * @module model/RateLimiterResponse1
 * @version 3.0.0-alpha1
 */
var RateLimiterResponse1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RateLimiterResponse1</code>.
   * Custom response to be sent when the rate limit is exceeded. Required if &#x60;action&#x60; is &#x60;response&#x60;.
   * @alias module:model/RateLimiterResponse1
   */
  function RateLimiterResponse1() {
    _classCallCheck(this, RateLimiterResponse1);

    RateLimiterResponse1.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RateLimiterResponse1, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RateLimiterResponse1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RateLimiterResponse1} obj Optional instance to populate.
     * @return {module:model/RateLimiterResponse1} The populated <code>RateLimiterResponse1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RateLimiterResponse1();

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'Number');
        }

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RateLimiterResponse1;
}();
/**
 * HTTP status code for custom limit enforcement response.
 * @member {Number} status
 */


RateLimiterResponse1.prototype['status'] = undefined;
/**
 * MIME type for custom limit enforcement response.
 * @member {String} content_type
 */

RateLimiterResponse1.prototype['content_type'] = undefined;
/**
 * Response body for custom limit enforcement response.
 * @member {String} content
 */

RateLimiterResponse1.prototype['content'] = undefined;
var _default = RateLimiterResponse1;
exports["default"] = _default;